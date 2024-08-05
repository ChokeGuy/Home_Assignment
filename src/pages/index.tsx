import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [selectedTab, setSelectedTab] = useState('all')

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <div className="pt-10">
          <Tabs.Root value={selectedTab} onValueChange={setSelectedTab}>
            <Tabs.List className="flex flex-shrink-0 gap-x-2">
              <Tabs.Trigger
                className="rounded-full border border-gray-200 
                px-6 py-3 text-center text-sm font-bold text-gray-700
                data-[state='active']:bg-gray-700 
                data-[state='active']:text-white"
                value="all"
                aria-controls="all-content"
                aria-selected={selectedTab === 'all'}
              >
                All
              </Tabs.Trigger>

              <Tabs.Trigger
                className="rounded-full border border-gray-200 
                px-6 py-3 text-center text-sm font-bold text-gray-700
                data-[state='active']:bg-gray-700 
                data-[state='active']:text-white"
                value="pending"
                aria-controls="pending-content"
                aria-selected={selectedTab === 'pending'}
              >
                Pending
              </Tabs.Trigger>

              <Tabs.Trigger
                className="rounded-full border border-gray-200 
                px-6 py-3 text-center text-sm font-bold text-gray-700
                data-[state='active']:bg-gray-700 
                data-[state='active']:text-white"
                value="completed"
                aria-controls="completed-content"
                aria-selected={selectedTab === 'completed'}
              >
                Completed
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content id="all-content" value="all">
              <div className="pt-10">
                <TodoList statuses={['completed', 'pending']} />
              </div>
            </Tabs.Content>

            <Tabs.Content id="pending-content" value="pending">
              <div className="pt-10">
                <TodoList statuses={['pending']} />
              </div>
            </Tabs.Content>

            <Tabs.Content id="completed-content" value="completed">
              <div className="pt-10">
                <TodoList statuses={['completed']} />
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
