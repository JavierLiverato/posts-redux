/**
 * menuRoutes ( sidenav router structure, make routes of first and second level,
 * type "navItem" for link in first level, type "dropdown" for dropdown item with subitem links)
 *
 * example 
 * const menuRoutes = [
    {
        item: [
            { title: "Subitem 1", component: "/home"},
            { title: "Subitem 2", component: "/home"}
        ],
        title: "Items 1",
        icon: "magic",
        type:"dropdown"
    },
    {
        title: "Item 3",
        component: "/home",
        icon: "magic",
        type:"navitem"
    }
]
 * @export constant
 * @param none
 * @returns []
 */

const menuRoutes = [
    {
        title: "Inicio",
        component: "/home",
        icon: "home",
        type:"navitem"
    },
    {
        item: [
            { title: "Mis Publicaciones", component: "/posts"},
            { title: "Publicar", component: "/posts/new"}
        ],
        title: "POSTS",
        icon: "magic",
        type:"dropdown"
    },
];

export default menuRoutes;
