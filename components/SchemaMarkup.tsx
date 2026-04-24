type SchemaMarkupProps = {
  schema: Record<string, string | number | boolean | string[] | Record<string, unknown> | Array<Record<string, unknown>>>;
};

export function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      // Так поисковик видит структуру страницы простым JSON-описанием.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
