import { gql } from "@apollo/client"

const CREATE_ATTRIBUTE = gql`
    mutation createAttribute(
        $name: String,
        $slug: String,
        $isRequired: Boolean,
        $isVisible: Boolean,
        $isFilterable: Boolean) {

        createAttribute(data: {
            name: $name,
            slug: $slug,
            isRequired: $isRequired,
            isVisible: $isVisible,
            isFilterable: $isFilterable
        }
            ) {

            id
            name
            slug
            isRequired
            isVisible
            isFilterable
        }
    }
`;

export { CREATE_ATTRIBUTE }
