const objectOriented = [
    'object-oriented/index',
    {
        type: "category",
        label: "面向对象特性",
        link: {type: "doc", id: 'object-oriented/features/index'},
        items: [
            {
                type: "doc",
                label: '基于接口而非实现编程',
                id: 'object-oriented/features/InterfaceDrivenProgramming/index'
            },
            'object-oriented/features/CompositionOverInheritance/index'
        ]
    },
    {
        type: "category",
        label: "设计原则",
        link: {type: "doc", id: 'object-oriented/design-principle/index'},
        items: []
    },
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
