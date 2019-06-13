const FontSelector = ({fonts, selected, onSelect}) => {
		
		const selectorTemplate = fonts.map((el, idx) => {
				return (
					<div className="grid center font-item">
					  <input type="radio" name="font" value={el.name} id={el.name} />
					  <label for={el.name} className={`grid-${idx + 1}`}>
					   	<PictureFont text='text' path={el.path} />
					  </label>	
					</div>
				)
		})
    return (
        <div className="font-picker">
            {selectorTemplate}
        </div>
    )
};