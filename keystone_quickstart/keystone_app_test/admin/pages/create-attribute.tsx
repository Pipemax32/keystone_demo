import React, { useState } from "react"
import { Attribute } from "../types/Attribute";
import { useMutation} from "@apollo/client"
import { CREATE_ATTRIBUTE } from "../querys/create-attribute.queries";

export default function CreateProduct () {

    const [createAttribute, { data, loading, error }] = useMutation(CREATE_ATTRIBUTE);
    const [attribute, setAttribute] = useState<Attribute>({
        name: "",
        slug: "",
        isRequired: false,
        isVisible: false,
        isFilterable: false,
    })
    
    const onChange = (event: React.FormEvent<HTMLInputElement>):void =>  {
        const { name, value, type, checked } = event.currentTarget;
        setAttribute({ ...attribute, [name]: type === 'checkbox' ? checked : value});
    }

    const handleSubmit = (event: React.FormEvent, attribute: Attribute):void =>  {
        event.preventDefault();
        createAttribute({ variables: { ...attribute } });
    }

    return (
        <form onSubmit={(event=>handleSubmit(event, attribute))}>
            <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={onChange}
            />
            <input
                type="text"
                placeholder="Slug"
                name="slug"
                onChange={onChange}
            />
            <input
                type="checkbox"
                name="isRequired"
                onChange={onChange}
            />
            <input
                type="checkbox"
                name="isVisible"
                onChange={onChange}
            />
            <input
                type="checkbox"
                name="isFilterable"
                onChange={onChange}
            />
            <button type="submit">
                Submit
            </button>
        </form>
    );
}

