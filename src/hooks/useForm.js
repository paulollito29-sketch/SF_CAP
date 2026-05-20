import { useState } from "react";

const useForm = (initialValues) => {

    const [formData, setFormData] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    return {
        formData,
        handleChange,
        ...formData
    }
}

export default useForm