/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-07-31 18:58:49
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-08-01 10:13:32
 * @FilePath: /nodejs/龟兔赛跑.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const chalkWorker = require('chalk-animation')
class Race extends Object {
  constructor(props = {}){
    super(props)
    ;[
      ['rabbit', '兔子'],
      ['turtle', '乌龟'],
      ['rabbitStep', 0],
      ['turtleStep', 0],
      ['start', '|'],
      ['end', '》'],
      ['pad', '.'],
      ['speed', 1],
      ['steps', 50],
      ['stopAt', Math.floor(Math.random() * 45) + 3]
    ].forEach(element => {
     const [key, value] = element
     if(!(key in props)){
      this[key] = value
     } 
    });
  }
  getRaceTrack(){
    const {
      start,
      pad,
      turtle,
      turtleStep,
      rabbit,
      rabbitStep,
      steps,
      end
    } = this
    if(!turtleStep && !rabbitStep){
      return `${turtle}${rabbit}${start}${pad.repeat(steps)}${end}`
    }
    const [
      [minStr, min],
      [maxStr, max]
    ] = [
      [turtle, turtleStep],
      [rabbit, rabbitStep]
    ].sort((a, b) => a[1] - b[1])
    const prefix = `${pad.repeat((min || 1)- 1)}`
    const middle = `${pad.repeat(max-min)}`
    const suffix = `${pad.repeat(steps-max)}`
    const _start = `${start}${prefix}${minStr}`
    const _end = suffix ? `${maxStr}${suffix}${end}` : `${end}${maxStr}`
    return `${_start}${middle}${_end}`
  }
  updateRaceTrack(state, racing){
    racing.replace(state)
  }
  updataSteps(){
    if(this.turtleStep >= this.steps) return
    if(this.rabbitStep <= this.stopAt) {
      this.rabbitStep += 3 * this.speed
    }
    this.turtleStep += 1 * this.speed 
  }
  race(){
    const initState = this.getRaceTrack()
    const racing = chalkWorker.rainbow(initState)
    let t = 0
    let timer = setInterval(() => {
      if(t <= 19) {
        t += 1
        return
      }
      const state = this.getRaceTrack()
      this.updateRaceTrack(state, racing)
      this.updataSteps()
    }, 100)
  }
}
const proxy = new Proxy(Race, {
  apply(target, ctx, args){
    const race = new target(...args)
    return race.race()
  }
})
proxy()