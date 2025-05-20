import { Router } from "express";
import { UserRoute } from "../modules/auth/auth.route";
import { projectRoute } from "../modules/projects/projects.route";
import { blocksRoute } from "../modules/blocks/blocks.route";


const router = Router()

const moduleRoutes = [
    {
        path: '/auth',
        route: UserRoute
    },
    {
        path: '/projects',
        route: projectRoute
    },
    {
        path: '/blocks',
        route: blocksRoute
    },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
