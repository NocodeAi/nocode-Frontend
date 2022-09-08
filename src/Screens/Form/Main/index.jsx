import { ViewMoreCard } from '../../../Components/Cards'
import Header from '../../../Components/Header'

export default () => {

    const formCards = [
        {
            id: 1,
            label: "Form Builder",
            link: "/form_builder"
        },
        {
            id: 2,
            label: "All Forms",
            link: "/all_forms"
        }
    ]

    return (
        <>
            <Header />
            <div style={{display: "flex", padding: "16px"}}>
                {formCards.map((c) => {
                    return <ViewMoreCard key={c?.id} label={c?.label} link={c?.link} style={{margin: "4px"}} />
                })}
            </div>
        </>
    )
}