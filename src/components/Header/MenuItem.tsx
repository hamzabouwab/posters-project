const MenuItem = ({name}:{name:string}) => {
  return (
    <li>
              <a
                href=""
                className="text-md  tracking-widest font-semibold md:text-md uppercase hover:text-green-600 duration-150 md:text-green-950"
                >
                {name}
              </a>
            </li>
  )
}

export default MenuItem