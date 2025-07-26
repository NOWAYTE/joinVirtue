import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

type GlassSheetProps = {
  children: React.ReactNode
  trigger: React.ReactNode
  className?: string
  triggerClass?: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

const GlassSheet = ({
  children,
  trigger,
  className,
  triggerClass,
  open,
  onOpenChange,
}: GlassSheetProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger className={cn(triggerClass)} asChild>
        {trigger}
      </SheetTrigger>
      <SheetContent
        className={cn(
          "bg-clip-padding backdrop-filter backdrop--blur__safari backdrop-blur-3xl bg-opacity-20 bg-themeGray border-themeGray text-themeTextGray",
          className,
        )}
      >
        {children}
      </SheetContent>
    </Sheet>
  )
}

export default GlassSheet