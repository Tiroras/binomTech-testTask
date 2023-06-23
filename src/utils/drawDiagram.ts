export const drawDiagram = (ctx: CanvasRenderingContext2D, totalValue: number, value: number): void => {
  const calculatedValue = (2 * Math.PI * value) / totalValue

  ctx.fillStyle = '#fcb53b'
  ctx.beginPath()
  ctx.moveTo(150, 75)
  ctx.arc(150, 75, 70, 0, Math.PI * 2, true)
  ctx.closePath()
  ctx.fill()

  ctx.fillStyle = '#505050'
  ctx.beginPath()
  ctx.moveTo(150, 75)
  ctx.arc(150, 75, 70, calculatedValue + calculatedValue, calculatedValue, true)
  ctx.closePath()
  ctx.fill()

  ctx.fillStyle = '#fff'
  ctx.beginPath()
  ctx.arc(150, 75, 40, 0, Math.PI * 2, true)
  ctx.closePath()
  ctx.fill()
}
