// ArticleTabSwitcher.tsx
"use client"

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { DataTable } from "@/components/data-table"
import dataRaw from "./data.json"

const data = dataRaw.filter((row) => row.status === "Generated")
const dataPublished = dataRaw.filter((row) => row.status === "Published")
const dataScheduled = dataRaw.filter((row) => row.status === "Scheduled")
const dataArchived = dataRaw.filter((row) => row.status === "Archived")

export default function ArticleTabSwitcher() {
  return (
    <div className="w-full">

      <Tabs defaultValue="generated" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="generated">Generated</TabsTrigger>
          <TabsTrigger value="published">Published</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>

        <TabsContent value="generated">
          <Card>
            <CardHeader>
              <CardTitle>Generated Articles</CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable data={data} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="published">
          <Card>
            <CardHeader>
              <CardTitle>Published Articles</CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable data={dataPublished} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scheduled">
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Articles</CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable data={dataScheduled} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="archived">
          <Card>
            <CardHeader>
              <CardTitle>Archived Articles</CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable data={dataArchived} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
