import { Router } from "express";
import { UserRoute } from "../modules/auth/auth.route";
import { projectRoute } from "../modules/projects/projects.route";


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
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
