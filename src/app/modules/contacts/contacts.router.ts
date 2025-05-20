import express from 'express'
import { contactsServices } from './contacts.services'


const router = express.Router()

router.post('/', contactsServices.contactME)

export const contactsRoute = router
