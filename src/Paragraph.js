import { ThemeContext } from './App'
import { useContext } from 'react'

function Paragraph() {
        const color = useContext(ThemeContext)
        return (
                <div>
                        <p className={color}>Text Content</p>
                </div>
        )
}
export default Paragraph