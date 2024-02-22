import * as z from 'zod'
import {
  zodRemoteJobLocations,
  zodRemoteJobPositions,
  zodTypesArray,
} from '../../utils/constants'

const MAX_FILE_SIZE = 2 * 1024 * 1024 // 2MB
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'] as const

const jobTypeEnum = z.enum(zodTypesArray)
const jobLocationEnum = z.enum(zodRemoteJobLocations)
const jobPositionEnum = z.enum(zodRemoteJobPositions)

export const formSchema = z.object({
  title: z.string().min(6, {
    message: 'Job title must be at least 6 characters.',
  }),
  jobType: jobTypeEnum,
  location: jobLocationEnum,
  position: jobPositionEnum,
  benefits: z.array(z.string()),
  salary: z.string().refine((value) => /^\d+-\d+$/.test(value), {
    message: 'Invalid salary range format. It should be like "MIN-MAX"',
  }),
  jobDescription: z
    .string()
    .min(100, {
      message: 'Job Description must be at least 100 characters.',
    })
    .max(1000, {
      message: 'Job Description must not be longer than 1000 characters.',
    }),
  companyDescription: z
    .string()
    .min(100, {
      message: 'Company Description must be at least 100 characters.',
    })
    .max(1000, {
      message: 'Company Description must not be longer than 1000 characters.',
    }),
  companyName: z.string().min(6, {
    message: 'Company Name must be at least 6 characters.',
  }),
  companyImage: z
    .any()
    .refine((files) => {
      if (files && files.length > 0) {
        return files[0].size <= MAX_FILE_SIZE
      }
      return true
    }, `Max image size is 2MB.`)
    .refine((files) => {
      if (files && files.length > 0) {
        return ACCEPTED_IMAGE_TYPES.includes(files[0].type)
      }
      return true
    }, 'Only .jpg, .jpeg, .png, .gif, and .webp formats are supported.')
    .refine(
      (value) => value !== null && value !== undefined && value.length > 0,
      { message: 'Company image is required.', path: [] }
    ),
})
