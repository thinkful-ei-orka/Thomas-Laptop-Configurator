import React from 'react';

class ComputerForm extends React.Component {


    render() {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }
}

export default ComputerForm;