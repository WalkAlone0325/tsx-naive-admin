import DButton from '@/components/DButton'
import RightTool from '@/components/RightTool'
import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  SettingOutlined
} from '@vicons/antd'
import type { DataTableColumns } from 'naive-ui'
import { NIcon } from 'naive-ui'
import { NSpace } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { NButton, NDataTable, NTag } from 'naive-ui'
// import useDataTable from '@/hooks/dataTable'

type RowData = {
  key: number
  name: string
  age: number
  address: string
  tags: string[]
}

const createColumns = ({
  sendMail,
  handleDel
}: {
  sendMail: (rowData: RowData) => void
  handleDel: (rowData: RowData) => void
}): DataTableColumns<RowData> => {
  return [
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Age',
      key: 'age'
    },
    {
      title: 'Address',
      key: 'address'
    },
    {
      title: 'Tags',
      key: 'tags',
      render(row) {
        const tags = row.tags.map((tagKey) => {
          return h(
            NTag,
            {
              style: {
                marginRight: '6px'
              },
              type: 'info',
              bordered: false
            },
            {
              default: () => tagKey
            }
          )
        })
        return tags
      }
    },
    {
      title: 'Action',
      key: 'actions',
      render(row) {
        return (
          <NSpace>
            <DButton
              content="编辑"
              text
              icon={EditOutlined}
              onClick={() => sendMail(row)}
            />
            <DButton
              content={'删除'}
              text
              type={'error'}
              icon={DeleteOutlined}
              onClick={() => handleDel(row)}
            />
          </NSpace>
        )
      }
    }
  ]
}

const createData = (): RowData[] => {
  const resList: RowData[] = []
  for (let i = 0; i < 40; i++) {
    if (Math.random() * 10 > 5) {
      resList.push({
        key: i++,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer']
      })
    } else {
      resList.push({
        key: i++,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['wow']
      })
    }
  }
  return resList
}

const SearchTable = defineComponent({
  name: 'SearchTable',
  setup() {
    const message = useMessage()
    let size = ref('medium')

    // const { columns, data, pagination } = useDataTable()
    const data = createData()
    const columns = createColumns({
      sendMail(rowData) {
        message.info(`send mail to ${rowData.name}`)
      },
      handleDel(rowData) {
        message.error(`send mail to ${rowData.name}`)
      }
    })
    const pagination = {
      pageNum: 1,
      pageSize: 10
    }

    // EyeOutlined 明细 ExportOutlined 导出 EditOutlined 编辑 DownloadOutlined 下载 DeleteOutlined 删除 CloseOutlined 关闭 CheckOutlined 检测
    const handleAdd = () => {
      message.success('成功')
    }

    return () => (
      <div>
        {/* 操作栏 */}
        <NSpace class={'mb8'} justify={'space-between'}>
          <NSpace>
            <DButton content={'测试'} onClick={handleAdd} />
            <DButton
              content={'新增'}
              type="primary"
              icon={PlusOutlined}
              onClick={handleAdd}
            />
            <DButton
              content={'修改'}
              type={'warning'}
              icon={EditOutlined}
              onClick={handleAdd}
            />
            <DButton
              content={'删除'}
              type={'error'}
              icon={DeleteOutlined}
              onClick={handleAdd}
            />
          </NSpace>

          <RightTool
            onChangeSize={(payload) => {
              size.value = payload
            }}
          />
          {/* <NSpace size={'small'}>
            <DButton
              icon={SettingOutlined}
              circle
              type={'info'}
              size={'small'}
            />
            <DButton
              icon={SettingOutlined}
              circle
              type={'info'}
              size={'small'}
            />
            <DButton
              icon={SettingOutlined}
              circle
              type={'info'}
              size={'small'}
            />
          </NSpace> */}
        </NSpace>
        {/* 数据表格 */}
        <NDataTable
          size={size.value}
          columns={columns}
          data={data}
          pagination={pagination}
        />
      </div>
    )
  }
})

export default SearchTable
