function TechProficiency({ language = "", logo = "" ,clsName=""}) {
    return (
        <>
           <div className="col-2 col-s-6">
            <div className="icons_box">
              <div className="icon_wrap">
                <img src={`/images/icons/${logo}`} alt="" />
                <span>{language}</span>
             </div>
             <div className={`${clsName} skill_know`}>

             </div>
            </div>
            </div>
        </>
    )
}

export default TechProficiency
