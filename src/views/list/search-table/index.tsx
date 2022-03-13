import type { DataTableColumns } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { NButton, NDataTable } from 'naive-ui'

type Song = {
  no: number
  title: string
  length: string
}

const createColumns = ({
  play
}: {
  play: (row: Song) => void
}): DataTableColumns<Song> => {
  return [
    {
      title: 'No',
      key: 'no'
    },
    {
      title: 'Title',
      key: 'title'
    },
    {
      title: 'Length',
      key: 'length'
    },
    {
      title: 'Action',
      key: 'actions',
      render(row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: 'small',
            onClick: () => play(row)
          },
          { default: () => 'Play' }
        )
      }
    }
  ]
}

const data: Song[] = [
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' }
]

const SearchTable = defineComponent({
  name: 'SearchTable',
  setup() {
    const message = useMessage()

    const columns = createColumns({
      play(row: Song) {
        message.info(`Play ${row.title}`)
      }
    })

    return () => (
      <NDataTable columns={columns} data={data} pagination={false}></NDataTable>
    )
  }
})

export default SearchTable
