function VerticalNavElement({section, setSection, id, src}) {
    return (
        <a
        href={"#title"+id}
        onClick={() => setSection(id)}
        onMouseEnter={(ev) => {ev.target.style.backgroundColor = "rgb(255,174,0)"; ev.target.querySelector("img").style.filter="brightness(0)"}}
        onMouseLeave={(ev) => {if(section === id){return}else ev.target.style.backgroundColor = ""; ev.target.querySelector("img").style.filter="brightness(1)"}} xs={2} style={{height: 60, width: 60, backgroundColor: section===id?"rgb(255,174,0)":""}} className="p-2 d-block rounded border">
            <img style={{filter: `brightness(${section === id?0:1})`}} className="w-100" src={src} alt="home" />
        </a>
    )
}

export default VerticalNavElement