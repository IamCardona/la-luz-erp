/**
 * 
 * Lasted update: 27 june 2022
 * By: Iam Cardona Mejia
 * 
 */

export default function FieldComponent({field, itemsNum, children}) {
  return(
    <div style={{
      display: field.icon && "flex",
      minWidth: field.minWidth,
      maxWidth: field.maxWidth,
      width: `calc((100% / ${itemsNum}) - ${itemsNum}rem)`
    }} className="form-component-container-field">
      {field.icon && (
        <div className="form-component-icon-field">
          {field.icon}
        </div>
      )}
      {!field.icon && <label className="form-component-label">{field.label}</label>}
      {children}
    </div>
  )
}