
type TLogMethodParams = {
    object: (value: Object | object) => string
    number: (value: Number | number) => string
    string: (value: String | string) => string
    unknown: (value: unknown) => string
}

interface ILog {
    info: (messageCallback: (options: TLogMethodParams) => string) => void
    warn: (messageCallback: (options: TLogMethodParams) => string) => void
}

class LogFormatter {
    public static object(value: Object | object) {
        return `object: { ${value} }`
    }

    public static number(value: Number | number) {
        return `number: '${value}'`
    }

    public static string(value: String | string) {
        return `string: '${value}'`
    }

    public static unknown(value: unknown) {
        return `${typeof value}: '${value}'`
    }

}

class Logger implements ILog {

    public info(messageCallback: (options: TLogMethodParams) => string) {
        console.log(`INFO: ${messageCallback({
            object: LogFormatter.object,
            number: LogFormatter.number,
            string: LogFormatter.string,
            unknown: LogFormatter.unknown,
        })}`)
    }

    public warn(messageCallback: (options: TLogMethodParams) => string) {
        console.warn(`WARN: ${messageCallback({
            object: LogFormatter.object,
            number: LogFormatter.number,
            string: LogFormatter.string,
            unknown: LogFormatter.unknown,
        })}`)
    }
}

export const Log = new Logger()
