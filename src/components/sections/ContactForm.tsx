"use client";

import { useState, useRef, useEffect } from "react";

const systems = [
  { value: 'modblock', label: 'The Modblock', sub: 'Structural System' },
  { value: 'modwall', label: 'The Modwall', sub: 'Panel System' },
  { value: 'modframe', label: 'The Modframe', sub: 'Fascia & Branding' },
  { value: 'modlab', label: 'The Modlab', sub: 'Bespoke & Custom' },
  { value: 'unsure', label: 'Not Sure', sub: 'Advise me' },
];

const solutions = [
  { value: 'shows-festivals', label: 'Shows & Festivals', sub: 'Live & Touring' },
  { value: 'exhibitions-conference', label: 'Exhibitions & Conference', sub: 'Stands & Installs' },
  { value: 'hospitality-restaurants', label: 'Hospitality & Restaurants', sub: 'VIP & Dining' },
  { value: 'retail-merchandise', label: 'Retail & Merchandise', sub: 'Brand Retail' },
  { value: 'brand-activations', label: 'Brand Activations', sub: 'Experiential' },
  { value: 'experiential-marketing', label: 'Experiential Marketing', sub: 'Activations & Tours' },
  { value: 'automotive-motorsport', label: 'Automotive & Motorsport', sub: 'Circuit & Brand' },
  { value: 'domestic-commercial', label: 'Domestic & Commercial', sub: 'Office & Welfare' },
  { value: 'other', label: 'Other', sub: 'Something else' },
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const [values, setValues] = useState({
    firstName: '', lastName: '', company: '', email: '',
    landline: '', mobile: '', productSystem: '', solution: '', message: '',
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const [systemOpen, setSystemOpen] = useState(false);
  const [solutionOpen, setSolutionOpen] = useState(false);

  const systemRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMouseDown(e: MouseEvent) {
      if (systemRef.current && !systemRef.current.contains(e.target as Node)) {
        setSystemOpen(false);
      }
      if (solutionRef.current && !solutionRef.current.contains(e.target as Node)) {
        setSolutionOpen(false);
      }
    }
    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, []);

  // Captcha — image puzzle slider
  const [sliderVal, setSliderVal] = useState(0);
  const [captchaPassed, setCaptchaPassed] = useState(false);
  const [captchaKey, setCaptchaKey] = useState(0);
  const BLOCK_SIZE = 52;
  const puzzleRef = useRef<HTMLDivElement>(null);
  const [maxSlider, setMaxSlider] = useState(228);

  useEffect(() => {
    const updateMax = () => {
      if (puzzleRef.current) {
        setMaxSlider(puzzleRef.current.offsetWidth - BLOCK_SIZE);
      }
    };
    updateMax();
    window.addEventListener('resize', updateMax);
    return () => window.removeEventListener('resize', updateMax);
  }, []);

  const [TARGET, setTARGET] = useState(0);
  useEffect(() => {
    const m = maxSlider || 228;
    setTARGET(Math.floor(m * 0.2) + Math.floor(Math.random() * Math.floor(m * 0.6)));
  }, [captchaKey, maxSlider]);

  const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (captchaPassed) return;
    setSliderVal(parseInt(e.target.value));
  };

  const handleSliderRelease = () => {
    if (captchaPassed) return;
    if (Math.abs(sliderVal - TARGET) <= BLOCK_SIZE * 0.15) {
      setCaptchaPassed(true);
      setSliderVal(TARGET);
    } else {
      setSliderVal(0);
    }
  };

  const resetCaptcha = () => {
    setSliderVal(0);
    setCaptchaPassed(false);
    setCaptchaKey(k => k + 1);
  };

  const phoneRe = /^[\d\s\+\(\)\-]{7,}$/;
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const countWords = (text: string) => text.trim().split(/\s+/).filter(w => w.length > 0).length;
  const wordCount = countWords(values.message);

  const valid = {
    firstName: values.firstName.trim().length > 0,
    lastName: values.lastName.trim().length > 0,
    company: values.company.trim().length > 0,
    email: emailRe.test(values.email),
    landline: values.landline.trim().length > 0
      ? phoneRe.test(values.landline)
      : values.mobile.trim().length > 0,
    mobile: values.mobile.trim().length > 0
      ? phoneRe.test(values.mobile)
      : values.landline.trim().length > 0,
    productSystem: values.productSystem !== '',
    solution: values.solution !== '',
    message: wordCount >= 10,
  };

  const formValid =
    valid.firstName && valid.lastName && valid.company && valid.email &&
    valid.landline && valid.mobile &&
    valid.productSystem && valid.solution && valid.message && captchaPassed;

  const touch = (field: string) => setTouched(t => ({ ...t, [field]: true }));
  const change = (field: string, value: string) => setValues(v => ({ ...v, [field]: value }));

  function ValidationIcon({ field }: { field: keyof typeof valid }) {
    if (!touched[field]) return null;
    return (
      <span style={{
        position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
        color: valid[field] ? '#C6FF02' : '#ff4444',
        fontSize: '16px', fontWeight: 'bold', pointerEvents: 'none',
      }}>
        {valid[field] ? '✓' : '✗'}
      </span>
    );
  }

  if (submitSuccess) {
    return (
      <div style={{
        padding: '40px',
        background: 'rgba(198,255,2,0.06)',
        border: '1px solid #C6FF02',
        textAlign: 'center',
        fontFamily: 'var(--font-mono)',
        color: '#C6FF02',
        letterSpacing: '0.2em',
        fontSize: '14px',
      }}>
        BRIEF RECEIVED — WE&apos;LL BE IN TOUCH WITHIN 3–5 BUSINESS DAYS ✓
      </div>
    );
  }

  const selectedSystem = systems.find(s => s.value === values.productSystem);
  const selectedSolution = solutions.find(s => s.value === values.solution);

  return (
    <>
      <style>{`
        .contact-form {
          background: #0A0A0A;
          border: 1px solid rgba(198,255,2,0.15);
          padding: clamp(32px, 4vw, 64px);
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          margin-bottom: 2px;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          background: #111;
          padding: 20px 24px;
          border: 1px solid rgba(255,255,255,0.06);
          transition: border-color 0.2s ease;
          position: relative;
        }
        .form-field:focus-within {
          border-color: rgba(198,255,2,0.4);
        }
        .form-field-full {
          margin-bottom: 2px;
        }
        .form-label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #C6FF02;
          margin-bottom: 10px;
        }
        .form-input, .form-textarea {
          background: transparent;
          border: none;
          outline: none;
          color: #fff;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 300;
          width: 100%;
        }
        .form-input::placeholder, .form-textarea::placeholder {
          color: rgba(255,255,255,0.2);
        }
        .form-textarea {
          resize: none;
          min-height: 140px;
          line-height: 1.6;
        }
        .form-submit {
          width: 100%;
          background: #C6FF02;
          color: #000;
          border: none;
          padding: 22px;
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          cursor: pointer;
          margin-top: 2px;
          transition: background 0.2s ease;
        }
        .form-submit:hover:not(:disabled) { background: #fff; }
        .form-submit:disabled { opacity: 0.4; cursor: not-allowed; }
        .captcha-wrapper {
          background: #111;
          border: 1px solid rgba(198,255,2,0.15);
          padding: 24px;
          margin-bottom: 2px;
        }
        .captcha-label {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.22em;
          color: #C6FF02;
          margin-bottom: 16px;
          text-transform: uppercase;
        }
        .captcha-verified {
          color: #C6FF02;
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.15em;
          margin-top: 10px;
        }
        input[type=range] {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          margin: 0;
          padding: 0;
          background: transparent;
          display: block;
          box-sizing: border-box;
        }
        input[type=range]::-webkit-slider-runnable-track {
          height: 4px;
          background: rgba(198,255,2,0.2);
          border-radius: 0;
        }
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          background: #C6FF02;
          border-radius: 50%;
          margin-top: -8px;
          cursor: pointer;
        }
        input[type=range]::-moz-range-track {
          height: 4px;
          background: rgba(198,255,2,0.2);
        }
        input[type=range]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #C6FF02;
          border: none;
          border-radius: 50%;
          cursor: pointer;
        }

        /* Custom picker */
        .picker-wrapper {
          position: relative;
        }
        .picker-trigger {
          background: transparent;
          border: none;
          color: #fff;
          font-family: var(--font-body);
          font-size: 15px;
          width: 100%;
          cursor: pointer;
          text-align: left;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0;
        }
        .picker-trigger-placeholder {
          color: rgba(255,255,255,0.2);
        }
        .picker-trigger-value {
          color: #fff;
        }
        .picker-arrow {
          color: #C6FF02;
          font-size: 14px;
          flex-shrink: 0;
          margin-left: 8px;
          transition: transform 0.15s ease;
        }
        .picker-arrow.open {
          transform: rotate(180deg);
        }
        .picker-panel {
          position: absolute;
          top: 100%;
          left: -24px;
          right: -24px;
          z-index: 100;
          background: #0D0D0D;
          border: 1px solid rgba(198,255,2,0.3);
          border-top: none;
          display: grid;
          gap: 2px;
          padding: 2px;
        }
        .picker-option {
          padding: 14px 18px;
          border: 1px solid rgba(198,255,2,0.15);
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease;
          background: #111;
        }
        .picker-option:hover {
          background: #C6FF02;
        }
        .picker-option:hover .picker-label {
          color: #000;
        }
        .picker-option:hover .picker-sub {
          color: #000;
        }
        .picker-option.selected {
          border-color: #C6FF02;
          background: rgba(198,255,2,0.08);
        }
        .picker-label {
          font-family: var(--font-display);
          font-size: 18px;
          color: #fff;
          display: block;
          letter-spacing: 0.04em;
        }
        .picker-sub {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          display: block;
          margin-top: 4px;
        }
        .system-grid {
          grid-template-columns: 1fr 1fr;
        }
        .solution-grid {
          grid-template-columns: 1fr 1fr;
        }

        @media (max-width: 768px) {
          .form-row { grid-template-columns: 1fr; }
          .solution-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <form
        className="contact-form"
        onSubmit={async (e) => {
          e.preventDefault();
          if (!formValid || isSubmitting) return;
          setIsSubmitting(true);
          setSubmitError(false);
          try {
            const res = await fetch('/api/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                firstName: values.firstName,
                lastName: values.lastName,
                company: values.company,
                email: values.email,
                landline: values.landline,
                mobile: values.mobile,
                productSystem: values.productSystem,
                solution: values.solution,
                projectDescription: values.message,
              }),
            });
            const data = await res.json();
            if (data.success) {
              setSubmitSuccess(true);
            } else {
              setSubmitError(true);
            }
          } catch {
            setSubmitError(true);
          } finally {
            setIsSubmitting(false);
          }
        }}
      >
        {/* Row 1: First Name | Last Name */}
        <div className="form-row">
          <div className="form-field">
            <label className="form-label">First Name</label>
            <input className="form-input" type="text" name="firstName" placeholder="James"
              value={values.firstName}
              onChange={(e) => change('firstName', e.target.value)}
              onBlur={() => touch('firstName')}
            />
            <ValidationIcon field="firstName" />
          </div>
          <div className="form-field">
            <label className="form-label">Last Name</label>
            <input className="form-input" type="text" name="lastName" placeholder="Anderson"
              value={values.lastName}
              onChange={(e) => change('lastName', e.target.value)}
              onBlur={() => touch('lastName')}
            />
            <ValidationIcon field="lastName" />
          </div>
        </div>

        {/* Row 2: Company | Email */}
        <div className="form-row">
          <div className="form-field">
            <label className="form-label">Company</label>
            <input className="form-input" type="text" name="company" placeholder="Anderson Agency"
              value={values.company}
              onChange={(e) => change('company', e.target.value)}
              onBlur={() => touch('company')}
            />
            <ValidationIcon field="company" />
          </div>
          <div className="form-field">
            <label className="form-label">Email</label>
            <input className="form-input" type="email" name="email" placeholder="james@andersonagency.com"
              value={values.email}
              onChange={(e) => change('email', e.target.value)}
              onBlur={() => touch('email')}
            />
            <ValidationIcon field="email" />
          </div>
        </div>

        {/* Row 3: Landline | Mobile */}
        <div className="form-row">
          <div className="form-field">
            <label className="form-label">Landline</label>
            <input className="form-input" type="tel" name="landline" placeholder="01234 567 890"
              value={values.landline}
              onChange={(e) => { change('landline', e.target.value); setTouched(t => ({ ...t, mobile: true })); }}
              onBlur={() => setTouched(t => ({ ...t, landline: true, mobile: true }))}
            />
            <ValidationIcon field="landline" />
          </div>
          <div className="form-field">
            <label className="form-label">Mobile</label>
            <input className="form-input" type="tel" name="mobile" placeholder="07700 900 000"
              value={values.mobile}
              onChange={(e) => { change('mobile', e.target.value); setTouched(t => ({ ...t, landline: true })); }}
              onBlur={() => setTouched(t => ({ ...t, mobile: true, landline: true }))}
            />
            <ValidationIcon field="mobile" />
          </div>
        </div>

        {/* Row 4: Product System — custom grid picker */}
        <div className="form-field form-field-full" ref={systemRef}>
          <label className="form-label">Product System</label>
          <div className="picker-wrapper">
            <button
              type="button"
              className="picker-trigger"
              onClick={() => { setSystemOpen(o => !o); touch('productSystem'); }}
            >
              <span className={selectedSystem ? 'picker-trigger-value' : 'picker-trigger-placeholder'}>
                {selectedSystem ? selectedSystem.label : 'Select a system...'}
              </span>
              <span className={`picker-arrow${systemOpen ? ' open' : ''}`}>▾</span>
            </button>

            {systemOpen && (
              <div className="picker-panel system-grid">
                {systems.map((sys, i) => (
                  <div
                    key={sys.value}
                    className={`picker-option${values.productSystem === sys.value ? ' selected' : ''}${i === systems.length - 1 && systems.length % 2 !== 0 ? ' last-full' : ''}`}
                    style={i === systems.length - 1 && systems.length % 2 !== 0 ? { gridColumn: '1 / -1' } : undefined}
                    onClick={() => {
                      change('productSystem', sys.value);
                      touch('productSystem');
                      setSystemOpen(false);
                    }}
                  >
                    <span className="picker-label">{sys.label}</span>
                    <span className="picker-sub">{sys.sub}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          {touched['productSystem'] && (
            <span style={{
              position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
              color: valid.productSystem ? '#C6FF02' : '#ff4444',
              fontSize: '16px', fontWeight: 'bold', pointerEvents: 'none',
            }}>
              {valid.productSystem ? '✓' : '✗'}
            </span>
          )}
        </div>

        {/* Row 5: Solution — custom 3-column picker */}
        <div className="form-field form-field-full" ref={solutionRef}>
          <label className="form-label">Solution</label>
          <div className="picker-wrapper">
            <button
              type="button"
              className="picker-trigger"
              onClick={() => { setSolutionOpen(o => !o); touch('solution'); }}
            >
              <span className={selectedSolution ? 'picker-trigger-value' : 'picker-trigger-placeholder'}>
                {selectedSolution ? selectedSolution.label : 'Select a solution...'}
              </span>
              <span className={`picker-arrow${solutionOpen ? ' open' : ''}`}>▾</span>
            </button>

            {solutionOpen && (
              <div className="picker-panel solution-grid">
                {solutions.map((sol) => (
                  <div
                    key={sol.value}
                    className={`picker-option${values.solution === sol.value ? ' selected' : ''}`}
                    style={sol.value === 'other' ? { gridColumn: 'span 2' } : undefined}
                    onClick={() => {
                      change('solution', sol.value);
                      touch('solution');
                      setSolutionOpen(false);
                    }}
                  >
                    <span className="picker-label">{sol.label}</span>
                    <span className="picker-sub">{sol.sub}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          {touched['solution'] && (
            <span style={{
              position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
              color: valid.solution ? '#C6FF02' : '#ff4444',
              fontSize: '16px', fontWeight: 'bold', pointerEvents: 'none',
            }}>
              {valid.solution ? '✓' : '✗'}
            </span>
          )}
        </div>

        {/* Row 6: Project brief */}
        <div className="form-field form-field-full" style={{
          borderColor: values.message.trim() === ''
            ? 'rgba(255,255,255,0.06)'
            : wordCount >= 10
              ? 'rgba(198,255,2,0.4)'
              : 'rgba(255,68,68,0.4)',
        }}>
          <label className="form-label">Tell Us About Your Project</label>
          <textarea className="form-textarea" name="message"
            placeholder="Tell us about your project — timeline, scale and any specific requirements. (Minimum 10 words)"
            value={values.message}
            onChange={(e) => change('message', e.target.value)}
            onBlur={() => touch('message')}
          />
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '8px',
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.15em',
          }}>
            <span style={{ color: wordCount < 10 ? '#ff4444' : '#C6FF02' }}>
              {values.message.trim() === ''
                ? ''
                : wordCount < 10
                  ? `MINIMUM 10 WORDS — ${10 - wordCount} MORE REQUIRED`
                  : `✓ ${wordCount} WORDS`
              }
            </span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>
              {values.message.trim() === '' ? '' : `${wordCount}/10 MIN`}
            </span>
          </div>
        </div>

        {/* Captcha — image puzzle slider */}
        <div className="captcha-wrapper">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span className="captcha-label">SECURITY — SLIDE TO VERIFY</span>
            <button
              type="button"
              onClick={resetCaptcha}
              style={{
                background: 'none',
                border: '1px solid rgba(198,255,2,0.3)',
                color: '#C6FF02',
                fontFamily: 'var(--font-mono)',
                fontSize: '9px',
                letterSpacing: '0.15em',
                padding: '5px 12px',
                cursor: 'pointer',
                textTransform: 'uppercase' as const,
              }}
            >↺ REFRESH</button>
          </div>

          {/* Image puzzle area */}
          <div ref={puzzleRef} style={{
            position: 'relative',
            width: '100%',
            height: '80px',
            overflow: 'hidden',
            border: '1px solid rgba(198,255,2,0.2)',
            marginBottom: '10px',
            background: '#0a0a0a',
          }}>
            {/* Full background logo — dimmed */}
            <img
              src="/Modsol/modsol YELLOW NB.png"
              alt=""
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center center',
                opacity: 0.3,
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            />

            {/* Target slot — empty dashed hole */}
            <div style={{
              position: 'absolute',
              left: `${TARGET}px`,
              top: '50%',
              transform: 'translateY(-50%)',
              width: `${BLOCK_SIZE}px`,
              height: `${BLOCK_SIZE}px`,
              border: '2px dashed rgba(198,255,2,0.6)',
              background: 'rgba(0,0,0,0.7)',
              boxSizing: 'border-box' as const,
              zIndex: 1,
            }} />

            {/* Sliding piece — always shows the TARGET fragment of the image */}
            <div style={{
              position: 'absolute',
              left: `${sliderVal}px`,
              top: '50%',
              transform: 'translateY(-50%)',
              width: `${BLOCK_SIZE}px`,
              height: `${BLOCK_SIZE}px`,
              overflow: 'hidden',
              border: '1px solid #C6FF02',
              boxShadow: '0 0 10px rgba(198,255,2,0.4)',
              zIndex: 2,
              background: '#0a0a0a',
            }}>
              <img
                src="/Modsol/modsol YELLOW NB.png"
                alt=""
                style={{
                  position: 'absolute',
                  height: '80px',
                  width: 'auto',
                  left: `-${TARGET}px`,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  opacity: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              />
            </div>

            {/* Verified overlay */}
            {captchaPassed && (
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0,0,0,0.5)',
                zIndex: 3,
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                letterSpacing: '0.2em',
                color: '#C6FF02',
              }}>VERIFIED ✓</div>
            )}
          </div>

          {/* Range slider — max matches puzzle container width minus block size */}
          <input
            type="range"
            min={0}
            max={maxSlider}
            value={sliderVal}
            onChange={handleSlider}
            onMouseUp={handleSliderRelease}
            onTouchEnd={handleSliderRelease}
            disabled={captchaPassed}
            style={{ cursor: captchaPassed ? 'default' : 'pointer' }}
          />

          {!captchaPassed && (
            <div style={{
              marginTop: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: 'rgba(255,255,255,0.3)',
              letterSpacing: '0.12em',
            }}>
              SLIDE THE BLOCK INTO THE MARKED POSITION
            </div>
          )}
        </div>

        {submitError && (
          <div style={{
            marginBottom: '8px',
            padding: '14px 18px',
            background: 'rgba(255,68,68,0.08)',
            border: '1px solid rgba(255,68,68,0.4)',
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            letterSpacing: '0.15em',
            color: '#ff4444',
          }}>
            FAILED TO SEND — PLEASE TRY AGAIN OR EMAIL sales@modsol.co.uk DIRECTLY
          </div>
        )}
        <button type="submit" className="form-submit" disabled={!formValid || isSubmitting}>
          {isSubmitting ? 'SENDING...' : 'SEND BRIEF →'}
        </button>
      </form>
    </>
  );
}
