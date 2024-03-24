<script lang="tsx">
import { defineComponent, PropType, toRefs, } from 'vue'
import { ElTable, ElEmpty, ElTableColumn, TableColumnCtx, } from 'element-plus'

type BaseColumnBaseKeys = keyof Pick<TableColumnCtx<unknown>, 'label' | 'prop' | 'type'>
type BaseColumnUIKeys = keyof Pick<TableColumnCtx<unknown>, 'align' | 'width' | 'minWidth' | 'fixed' | 'resizable' | 'showOverflowTooltip' | 'headerAlign' | 'className' | 'labelClassName'>
type BaseColumnDataKeys = keyof Pick<TableColumnCtx<unknown>, 'index' | 'columnKey' | 'renderHeader' | 'sortable' | 'sortMethod' | 'sortBy' | 'sortOrders' | 'formatter' | 'selectable' | 'reserveSelection' | 'filters' | 'filterMethod' | 'filterPlacement' | 'filterMultiple' | 'filteredValue'>

type BaseColumnKeys = BaseColumnBaseKeys | BaseColumnUIKeys | BaseColumnDataKeys
type BaseColumn = Partial<Pick<TableColumnCtx<unknown>, BaseColumnKeys>>

export interface Column extends BaseColumn {
  children?: Column[]
  render?: (...args: any[]) => any // FIXME 类型丢了
}

export default defineComponent({
  props: {
    columns: {
      type: Object as PropType<Column[]>,
    },
  },
  setup(props, { slots, }) {
    const { columns, } = toRefs(props)

    function renderColumn(col: Column) {
      const renderInner = (...args: any[]) => {
        if (col.render) return col.render(...args)
        if (col.children && col.children.length) {
          return col.children.map(child => renderColumn(child))
        }
      }
      return (
        <ElTableColumn {...col}>{{
          default: (...args: any[]) => renderInner(...args),
        }}</ElTableColumn>
      )
    }

    function render() {
      if (slots.default) return slots.default()
      if (!columns.value) return null
      return columns.value.map(col => renderColumn(col))
    }

    function renderEmpty() {
      if (slots.empty) return slots.empty()
      return (
        <ElEmpty />
      )
    }

    return () => (
      <ElTable>{{
        default: render,
        empty: renderEmpty,
      }}</ElTable>
    )
  },
})
</script>
