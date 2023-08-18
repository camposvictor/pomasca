/**
 * Array of ToggleItem objects used to define selectable options within a toggle group.
 * Each ToggleItem corresponds to a specific option users can choose.
 * @template Value - The type of the value associated with the toggle item.
 */
export interface ToggleItem<Value> {
  /**
   * The value associated with the toggle item. This value is used to identify
   * the item and its selection state.
   */
  value: Value

  /**
   * An accessible label used by screen readers to describe the purpose of
   * the toggle item. Should be concise and descriptive.
   */
  ariaLabel: string

  /**
   * The content to display as the label of the toggle item. This can be any
   * valid JSX or text content that represents the item visually.
   */
  content: React.ReactNode
}
