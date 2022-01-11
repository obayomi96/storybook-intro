import Button from "../components/Button"

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  backgroundColor: "blue",
  label: "Primary",
  size: "md",
}

export const Secondary = Template.bind({})
Secondary.args = {
  backgroundColor: "orange",
  label: "Secondary",
  size: "md",
}

export const Success = Template.bind({})
Success.args = {
  backgroundColor: "green",
  label: "Success",
  size: "md",
}

export const Failure = Template.bind({})
Failure.args = {
  backgroundColor: "red",
  label: "Failure",
  size: "md",
}

export const Small = Template.bind({})
Small.args = {
  backgroundColor: "red",
  label: "Danger",
  size: "sm",
}

export const Large = Template.bind({})
Large.args = {
  backgroundColor: "red",
  label: "Danger",
  size: "lg",
}

export const LongLabel = Template.bind({})
LongLabel.args = {
  backgroundColor: "red",
  label: "Long danger button component",
  size: "md",
}