const objectOriented = [
    'object-oriented/index',
    {
        type: "category",
        label: '设计模式',
        link: {type: "doc", id: 'object-oriented/design-pattern/index'},
        items: [
            {
                type: 'category',
                label: '创建型',
                link: {type: "doc", id: 'object-oriented/design-pattern/creation-type/index'},
                items: ['object-oriented/design-pattern/creation-type/factory/index']
            },
            {
                type: "category",
                label: "结构型",
                link: {type: "doc", id: 'object-oriented/design-pattern/structural-type/index'},
                items: []
            },
            {
                type: "category",
                label: "行为型",
                link: {type: "doc", id: 'object-oriented/design-pattern/behavior-type/index'},
                items: []
            }
        ]
    }
]
export default objectOriented as any;
