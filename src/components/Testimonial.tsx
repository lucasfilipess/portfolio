export type Props = {
  project: string
  title: string
  comment: string
  name: string
  date: string
  datetime: string
}

const Testimonial = ({
  project,
  title,
  comment,
  name,
  date,
  datetime
}: Props) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-cyan-600">{project}</p>
          <div className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{title}</p>
            <blockquote>
              <p className="mt-3 text-base text-gray-500">
                &ldquo;{comment}&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
        <div className="mt-6 flex items-center">
          <div>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={datetime}>{date}</time>
              <span aria-hidden="true">&middot;</span>
            </div>
            <p className="text-sm font-medium text-gray-900">{name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Testimonial
