"use client"

import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { DataTable } from "@/components/ui/data-table"
import { ApiList } from "@/components/ui/api-list"

import { BillboardColumn, columns } from "./columns"

interface BillboardClientProps {
  data: BillboardColumn[];
}

export const BillboardClient: React.FC<BillboardClientProps> = ({
  data
}) => {
  const router = useRouter()
  const params = useParams()

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage billboards for this store"
        />

        <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
          <Plus className="mr-2 w-4 h-4" />
          Add New
        </Button>
      </div>

      <Separator />

      <DataTable columns={columns} data={data} filterKey="label" />
      <Heading title="API" description="API calls for Billboards"/>
      <Separator />

      <ApiList />
    </>
  )
}