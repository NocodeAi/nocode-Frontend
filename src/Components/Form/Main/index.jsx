import { ViewMoreCard } from '../../Cards'
import Titlebar from '../../Header/Titlebar'
 
function Main(props) {

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
        <div>
            <Titlebar />
            <div style={{ display: "flex", paddingTop: "16px", paddingLeft: "36px", paddingRight: "36px" }}>
                {formCards.map((c) => {
                    return <ViewMoreCard key={c?.id} label={c?.label} link={c?.link} style={{ margin: "4px" }} />
                })}
            </div>
        </div>
    );
}

export default Main;