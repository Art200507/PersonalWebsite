#!/bin/bash

echo "📄 Generating PDF Resume from HTML"
echo "=================================="

# Check if wkhtmltopdf is installed
if command -v wkhtmltopdf &> /dev/null; then
    echo "✅ wkhtmltopdf found - Using it to generate PDF"
    wkhtmltopdf --page-size Letter --margin-top 0.5in --margin-bottom 0.5in --margin-left 0.5in --margin-right 0.5in resume.html "Atharva_Badgujar_Resume.pdf"
    echo "✅ PDF generated: Atharva_Badgujar_Resume.pdf"
elif command -v weasyprint &> /dev/null; then
    echo "✅ WeasyPrint found - Using it to generate PDF"
    weasyprint resume.html "Atharva_Badgujar_Resume.pdf"
    echo "✅ PDF generated: Atharva_Badgujar_Resume.pdf"
elif command -v pandoc &> /dev/null; then
    echo "✅ Pandoc found - Using it to generate PDF"
    pandoc resume.html -o "Atharva_Badgujar_Resume.pdf"
    echo "✅ PDF generated: Atharva_Badgujar_Resume.pdf"
else
    echo "❌ No PDF generation tools found"
    echo ""
    echo "📋 Manual PDF Generation Options:"
    echo "1. Open resume.html in Chrome/Edge"
    echo "2. Press Ctrl+P (Cmd+P on Mac)"
    echo "3. Select 'Save as PDF'"
    echo "4. Save as 'Atharva_Badgujar_Resume.pdf'"
    echo ""
    echo "🔧 Install PDF tools:"
    echo "- wkhtmltopdf: brew install wkhtmltopdf (macOS)"
    echo "- WeasyPrint: pip install weasyprint"
    echo "- Pandoc: brew install pandoc (macOS)"
fi

echo ""
echo "📱 Your resume is ready!"
echo "Files created:"
echo "- resume.html (HTML version)"
echo "- Atharva_Badgujar_Resume.pdf (PDF version - if tool available)" 