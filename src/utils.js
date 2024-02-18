/**
 * 取出注释中的targetPlat值
 * @param {*} reg 
 * @param {*} comment 
 * @returns [] 
 */
const getCommentTargetPlat = (reg, comment) => ((comment.value.trim().match(reg) || [])[1] || '').split('|')
  
export const getIfdefCommentTargetPlat = (comment) => getCommentTargetPlat(/ifdef targetPlat=(.*)/, comment)
  
export const getIfndefCommentTargetPlat = (comment) => getCommentTargetPlat(/ifndef targetPlat=(.*)/, comment)