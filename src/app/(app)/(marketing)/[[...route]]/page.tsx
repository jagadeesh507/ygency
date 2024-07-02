import { Page as PageType } from '@payload-types'
import { notFound } from 'next/navigation'

import RenderBlocks from '@/payload/blocks/RenderBlocks'
import { serverClient } from '@/trpc/serverClient'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const Page = async ({ params }: { params: { route: string[] } }) => {
  try {
    const pageData = await serverClient.page.getPageData({
      path: params?.route,
    })

    return <RenderBlocks pageInitialData={pageData as PageType} slug={params} />
  } catch (error) {
    console.error('Error: Page not found')
    notFound()
  }
}

export default Page
