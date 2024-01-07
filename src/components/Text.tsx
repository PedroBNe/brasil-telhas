interface TextProps {
  text: string;
  cor: string;
}

export default function Text(props: TextProps){
  return (
    <p className={`font-medium text-${props.cor} text-sm`}>{props.text}</p>
  )
}