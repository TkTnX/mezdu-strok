import { ERole } from "@/src/generated/prisma/enums"
import { SetMetadata } from "@nestjs/common"

export const ROLES_KEY = 'roles'
export const Roles = (role: ERole) => SetMetadata(ROLES_KEY, role)