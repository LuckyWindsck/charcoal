import { Meta, StoryObj } from '@storybook/react'
import Pager from '.'

export default {
  title: 'react-sandbox/Pager',
  component: Pager,
  args: {
    page: 5,
    pageCount: 10,
  },
} satisfies Meta<typeof Pager>

export const Default: StoryObj<typeof Pager> = {
  render: (props) => {
    return <Pager {...props}>children</Pager>
  },
}
