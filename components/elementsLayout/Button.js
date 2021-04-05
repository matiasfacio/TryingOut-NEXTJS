import Link from "next/link";

export default function Button(props) {
  
  return (
    <Link href={props.path}>
      <div>
        <div>{props.icon}</div>
        <span>{props.label}</span>
      </div>
    </Link> 
  );
}


