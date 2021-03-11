import React from 'react'
import { useTranslation } from 'react-i18next'
import '../translations/i18n'
import { TRANSLATIONS_EN } from '../translations/en/translations'

export const ExampleComponent = () => {
    const { t } = useTranslation();

    return (
        <div>
            <p>
                <p>
                    {t(TRANSLATIONS_EN.welcome)}
                </p>
                <p>
                    {t(TRANSLATIONS_EN.date_format_one, { date: new Date() })}
                </p>
                <p>
                    {t(TRANSLATIONS_EN.date_format_two, { date: new Date() })}
                </p>
            </p>
        </div>
    )
}
