import MyModal from '../MyModal';
import DatePicker from 'react-native-date-picker';
import { useState } from 'react';

export default function MyDateTimePicker({
    isVisible,
    onCancel,
}){
    const [date, setDate] = useState(new Date())
    return (
        <MyModal
            isVisible={isVisible}
            onCancel={onCancel}
        >
            <DatePicker date={date} onDateChange={setDate}
                mode='date'
                dividerColor={colors.quartenaryColor}
                style={{
                    
                }}
            />
        </MyModal>
    )
}