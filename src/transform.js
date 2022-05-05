const { traverse } = require('./traverse');

const transform = node => {traverse(node,{
    CallExpression: {
        enter({node}){
            if(specialForms[node.name]){
                specialForms[node.name](node)
            }
        }
    }
})
return node
};

const specialForms = {
    set(node){
        const [identifier,assign] = node.arguments
        node.type = 'vardec'
        node.identifier  = identifier
        node.assign = assign
        delete node.name
        delete node.arguments
    }
};

module.exports = { specialForms, transform };
