"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, Mail } from "lucide-react"
import { joinWaitlist } from "@/lib/actions"
import { useLanguage } from "@/lib/language-context"

function SubmitButton() {
  const { pending } = useFormStatus()
  const { t } = useLanguage()

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          {t('form.submitting')}
        </>
      ) : (
        <>
          {t('form.submit')}
        </>
      )}
    </Button>
  )
}

export default function WaitlistForm() {
  const [state, formAction] = useActionState(joinWaitlist, null)
  const { t } = useLanguage()

  return (
    <div className="max-w-md mx-auto">
      <form action={formAction} className="space-y-6">
        {state?.error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-xl text-center">
            {state.error}
          </div>
        )}

        {state?.success && (
          <div className="bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-3 rounded-xl text-center">
            {state.success}
          </div>
        )}

        <div className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t('form.email')}
              required
              className="pl-10 bg-white/5 border-white/20 text-white placeholder:text-gray-400 rounded-xl py-4 text-lg focus:border-red-500/50 focus:ring-red-500/25"
            />
          </div>
          
          {/* Sélection d'âge */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <input
                type="radio"
                id="age18plus"
                name="age"
                value="18plus"
                className="w-4 h-4 text-red-600 bg-gray-800 border-gray-600 focus:ring-red-500 focus:ring-2"
              />
              <label htmlFor="age18plus" className="text-sm text-gray-300 font-league-spartan">
                {t('form.age.18plus')}
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="radio"
                id="age18minus"
                name="age"
                value="18minus"
                className="w-4 h-4 text-red-600 bg-gray-800 border-gray-600 focus:ring-red-500 focus:ring-2"
              />
              <label htmlFor="age18minus" className="text-sm text-gray-300 font-league-spartan">
                {t('form.age.18minus')}
              </label>
            </div>
            <p className="text-xs text-gray-400 font-league-spartan">
              * {t('form.age.disclaimer')}
            </p>
          </div>
        </div>

        <SubmitButton />
      </form>
    </div>
  )
}
