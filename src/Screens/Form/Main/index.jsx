import Card from './card'
import Header from '../../../Components/Header'

export default () => {

    const cards = [
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
            <div style={{display: "flex", padding: "8px"}}>
                {cards.map((c) => {
                    return <Card key={c?.id} label={c?.label} link={c?.link} style={{margin: "2px"}} />
                })}
            </div>
        </>
    )
}