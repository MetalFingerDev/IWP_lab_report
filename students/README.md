# Students XML Data & XSD Schema

This directory provides a small XML dataset (`students.xml`) and the accompanying XML Schema (`student_schema.xsd`) to validate the records. It’s primarily an academic example showing how to structure student data, use attributes for identifiers (for example, registration numbers), and enforce patterns for fields such as phone numbers with regular expressions in XSD.

Contents

- `students.xml`: sample student records with `student` elements, names split into first and last names, and contact information.
- `student_schema.xsd`: schema defining element types, a nested `name` type, and a phone number pattern like `ddd-dddd` (three digits, hyphen, four digits).

How to use

1. Validate the XML against the schema with a tool like `xmllint`:

```bash
xmllint --noout --schema student_schema.xsd students.xml
```

Notes & Suggestions

- Consider adding fields like `email` and `courses`, or use `enumeration` or `pattern` types for `department` values to ensure controlled vocabularies.
- Useful for learning XSD mechanisms such as `xs:pattern`, nested complexTypes, and attribute validation for required fields.
