import { getIfdefCommentTargetPlat, getIfndefCommentTargetPlat } from './utils.js'

export default function (babel) {
  // 标记当前状态/节点是否在要删除的区间内
  let isRemove = false
  
  return {
    name: "babel-plugin-conditinal-compile-with-comment",
    visitor: {
      Program: {
        enter(path, state) {
          const targetPlat = state.opts.targetPlat
          // enter阶段打标记 标记打到每一个符合删除条件的nodePath上：nodePath.isRemove = true
          path.traverse({
            enter(nodePath) {
              // 根据标识isRemove来决定当前节点是不是要删除
              nodePath.isRemove = isRemove
              
              const { leadingComments = [], trailingComments = [] } = nodePath.node
              
              leadingComments.forEach(comment => {
                if (comment.value.trim().startsWith('ifdef') &&
                    !getIfdefCommentTargetPlat(comment).includes(targetPlat)) {
                    nodePath.isRemove = true // 给当前节点打标记
                    isRemove = true // 开启标识 给所有的后续节点打上true标记
                }
                
                if (comment.value.trim().startsWith('ifndef') &&
                    getIfndefCommentTargetPlat(comment).includes(targetPlat)) {
                  nodePath.isRemove = true // 给当前节点打标记
                  isRemove = true // 开启标识 给所有的后续节点打上true标记
                }
              })
              
              trailingComments.forEach(comment => {
                if (comment.value.trim().startsWith('endif')) {
                  isRemove = false // 关闭标识 后续所有节点打上false标记
                }
              })
              
              // 删除所有注释
              nodePath.node.leadingComments = []
              nodePath.node.trailingComments = []
            }
          })
        },
        exit(path) {
          path.traverse({
            enter(nodePath) {
              // 所有标记为remove的节点 进行删除
              if (nodePath.isRemove === true) nodePath.remove()
            }
          })
        }
      }
    }
  };
}
