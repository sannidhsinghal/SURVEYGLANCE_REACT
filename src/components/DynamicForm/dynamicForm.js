import React, {Compoment } from "react"


const {fields} = this.state;
return(
<form onSubmit={this.submitForm}>
{fields.map(form =>{
    if (form.input_type === "text") {
        return (
            <InText
            name = {form.name}
            placeholder={form.placeholder}
            required={form.required}
            key={form.placeholder}
            handleChange={this.handleChange}
            />

        )
    }
    if (form.input_type === "big_text"){
        return (
            <InTextarea
            name = {form.name}
            placeholder = {form.placeholder}
            required={form.required}
            key={form.placeholder}
            handleChange={this.handleChange}
            />
        )
    }
    if (form.input_type === "MCQ"){
        return (
            <InMCQ 
            name={form.name}
            placeholder={form.placeholder}
            required={form.required}
            key={form.placeholder}
            handleChange={this.handleChange}
            />
        )
    }
})}

<input type="submit" />
</form>



export default dynamicForm































