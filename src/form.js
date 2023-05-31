import React, { useState } from 'react'

export const Form = () => {
    const [froms, setForms] = useState([{ filedName: '', condition: '', value: '' }])
    const addForm = () => {
        setForms([...froms, { filedName: '', condition: '', value: '' }])
    };
    const removeForm = (index) => {
        // setForms([...froms, { filedName: '', condition: '', value: '' }])
        // console.log("hai")
        // alert("remover")
        const newForms=[...froms];
        newForms.splice(index , 1);
        setForms(newForms);
    };
    const handelChange = (e, index) => {
        const { name, value } = e.target;
        const newForms = [...froms];
        newForms[index][name] = value;
        setForms(newForms);
    };
    return (
        <div>
            <from>
                {froms.map((form, index) => (
                    <div key={index}>
                        <label>Field Name</label>
                        <input
                            type="name"
                            name="fieldName"
                            value={form.fieldName}
                            onChange={(e) => handelChange(e, index)}></input>
                        <label>Condition</label>
                        <input type="name" name="condition" value={form.condition} onChange={(e) => handelChange(e, index)}></input>
                        <label>value</label>
                        <input type="name" name="value" value={form.value} onChange={(e) => handelChange(e, index)}></input>
                        <button type='button' onClick={(index)=>removeForm(index)}>-</button>
                        <button type='button' onClick={addForm}>+</button>
                    </div>
                ))}
            </from>
        </div>
    )
}
