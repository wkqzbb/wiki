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
    },
    {
        type: "category",
        label: 'DDD',
        link: {type: "doc", id: 'object-oriented/ddd/index'},
        items: [
            {
                type: 'category',
                label: '基础概念',
                link: {type: "doc", id: 'object-oriented/ddd/basic/index'},
                items: [
                    'object-oriented/ddd/basic/domain',
                    'object-oriented/ddd/basic/bounded-context',
                    'object-oriented/ddd/basic/entity-and-value-object',
                    'object-oriented/ddd/basic/aggregate',
                    'object-oriented/ddd/basic/ddd_layered_architecture',
                    'object-oriented/ddd/basic/microservice_architecture_pattern',
                    'object-oriented/ddd/basic/middle-platform',
                    'object-oriented/ddd/basic/domain-modeling',
                    'object-oriented/ddd/basic/code-model',
                ]
            },
            {
                type: 'category',
                label: '战略设计',
                link: {type: "doc", id: 'object-oriented/ddd/strategic-design/index'},
                items: [
                    'object-oriented/ddd/strategic-design/2'
                ]
            }
        ]
    }
]
export default objectOriented as any;
