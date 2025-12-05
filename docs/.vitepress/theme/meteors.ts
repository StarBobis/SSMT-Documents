
export function initMeteorEffect() {
  if (typeof window === 'undefined') return
  if (document.getElementById('meteor-canvas')) return

  const canvas = document.createElement('canvas')
  canvas.id = 'meteor-canvas'
  canvas.style.position = 'fixed'
  canvas.style.top = '0'
  canvas.style.left = '0'
  canvas.style.width = '100%'
  canvas.style.height = '100%'
  // 放在视频背景之上 (-1) 但在内容之下
  // 视频背景通常也是 -1，但因为 canvas 是后添加的，所以会覆盖在视频上
  canvas.style.zIndex = '-1' 
  canvas.style.pointerEvents = 'none'
  document.body.appendChild(canvas)

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let width = window.innerWidth
  let height = window.innerHeight
  
  const resize = () => {
    width = window.innerWidth
    height = window.innerHeight
    canvas.width = width
    canvas.height = height
  }
  window.addEventListener('resize', resize)
  resize()

  // 浪漫粉色调 + 彩虹色
  const colors = [
    '#FFB6C1', // LightPink
    '#FF69B4', // HotPink
    '#FF1493', // DeepPink
    '#DB7093', // PaleVioletRed
    '#C71585', // MediumVioletRed
    '#DA70D6', // Orchid
    '#D8BFD8', // Thistle
    '#DDA0DD', // Plum
    '#EE82EE', // Violet
    '#FF00FF', // Magenta
    '#9370DB', // MediumPurple
    '#8A2BE2', // BlueViolet
    // 少量彩虹点缀
    '#00FFFF', // Cyan
    '#7FFFD4', // Aquamarine
    '#FFD700', // Gold
  ]

  class Star {
    x: number
    y: number
    size: number
    hue: number
    alpha: number
    baseAlpha: number
    rotation: number
    rotationSpeed: number
    pulsePhase: number
    pulseSpeed: number
    colorSpeed: number
    
    constructor(x: number, y: number, size: number, hue: number, alpha: number = 1) {
      this.x = x
      this.y = y
      this.size = size
      this.hue = hue
      this.alpha = alpha
      this.baseAlpha = alpha
      this.rotation = Math.random() * Math.PI * 2
      this.rotationSpeed = (Math.random() - 0.5) * 0.2 // 自转速度
      this.pulsePhase = Math.random() * Math.PI * 2
      this.pulseSpeed = 0.05 + Math.random() * 0.05 // 呼吸速度
      this.colorSpeed = 1 + Math.random() * 2 // 颜色变化速度
    }

    update() {
      this.rotation += this.rotationSpeed
      this.pulsePhase += this.pulseSpeed
      this.hue += this.colorSpeed // 颜色不断变化
      if (this.hue > 360) this.hue -= 360
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.save()
      ctx.translate(this.x, this.y)
      ctx.rotate(this.rotation)
      
      // 呼吸灯效果：透明度和发光强度随时间波动
      const pulse = (Math.sin(this.pulsePhase) + 1) / 2 // 0 到 1
      // 增强呼吸幅度：透明度在 0.2 到 1.0 之间剧烈波动
      const currentAlpha = this.alpha * (0.2 + 0.8 * pulse) 
      
      ctx.beginPath()
      // 绘制五角星
      for (let i = 0; i < 5; i++) {
        ctx.lineTo(0, -this.size)
        ctx.rotate((Math.PI * 2) / 10)
        ctx.lineTo(0, -this.size * 0.4) // 内半径
        ctx.rotate((Math.PI * 2) / 10)
      }
      ctx.closePath()
      
      // 使用 HSL 实现彩虹色变化
      const color = `hsl(${this.hue}, 80%, 70%)`
      
      ctx.fillStyle = color
      ctx.globalAlpha = Math.max(0, currentAlpha)
      
      // 增强荧光呼吸效果：光晕范围更大，且随呼吸波动
      ctx.shadowBlur = this.size * 3 * (0.5 + 1.5 * pulse) // 光晕范围 1.5x 到 6x
      ctx.shadowColor = color
      ctx.fill()
      ctx.restore()
    }
  }

  class Meteor {
    x: number
    y: number
    vx: number
    vy: number
    size: number
    hue: number
    trail: Star[] = []
    dead = false
    head: Star

    constructor() {
      // 覆盖全屏的生成逻辑
      if (Math.random() < 0.6) {
          this.x = Math.random() * (width + height * 0.5) - height * 0.2
          this.y = -60
      } else {
          this.x = width + 60
          this.y = Math.random() * height
      }
      
      // 向左下方移动
      const speed = 3 + Math.random() * 4
      const angle = Math.PI / 4 + (Math.random() * 0.2 - 0.1) // 约45度
      this.vx = -Math.cos(angle) * speed
      this.vy = Math.sin(angle) * speed
      
      this.size = 8 + Math.random() * 8
      // 初始颜色随机，偏向粉色/紫色 (300度左右)，但也允许其他颜色
      this.hue = Math.random() * 360
      
      // 头部星星
      this.head = new Star(this.x, this.y, this.size, this.hue, 1)
    }

    update() {
      this.x += this.vx
      this.y += this.vy
      
      // 更新头部位置和状态
      this.head.x = this.x
      this.head.y = this.y
      this.head.update()
      this.hue = this.head.hue // 同步颜色

      // 产生尾巴小星星
      if (Math.random() < 0.7) { 
        const trailStar = new Star(
          this.x, 
          this.y, 
          this.size * (0.2 + Math.random() * 0.3), 
          this.hue, // 继承当前颜色
          0.6 // 初始透明度
        )
        // 尾巴星星也有轻微的自转
        trailStar.rotationSpeed = (Math.random() - 0.5) * 0.1
        this.trail.push(trailStar)
      }

      // 更新尾巴
      for (let i = this.trail.length - 1; i >= 0; i--) {
        const p = this.trail[i]
        p.update() // 更新自转、呼吸和颜色
        p.alpha -= 0.015 // 逐渐消失
        p.x += this.vx * 0.2 // 稍微跟随一点惯性
        p.y += this.vy * 0.2
        
        if (p.alpha <= 0) {
          this.trail.splice(i, 1)
        }
      }

      // 检查边界
      if (this.y > height + 100 || this.x < -100) {
        if (this.trail.length === 0) {
            this.dead = true
        }
      }
    }

    draw(ctx: CanvasRenderingContext2D) {
      // 绘制尾巴
      this.trail.forEach(t => t.draw(ctx))
      
      // 绘制头部
      this.head.draw(ctx)
    }
  }

  const meteors: Meteor[] = []

  function animate() {
    if (!ctx) return
    ctx.clearRect(0, 0, width, height)
    
    // 增加流星出现频率 (0.015 -> 0.04)
    if (Math.random() < 0.04) { 
      meteors.push(new Meteor())
    }

    for (let i = meteors.length - 1; i >= 0; i--) {
      const m = meteors[i]
      m.update()
      m.draw(ctx)
      if (m.dead) {
        meteors.splice(i, 1)
      }
    }

    requestAnimationFrame(animate)
  }

  animate()
}
