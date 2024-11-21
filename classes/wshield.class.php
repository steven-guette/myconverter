<?php
/***
 * @Auteur: GUETTE Steven
 * @Classe: WShield
 * @Version: 1.0.0
 * @Depuis: 2023
 */

class WShield
{
    public static function IsString($value, $isEmptyCheck=true) {
        if (is_string($value)) {
            if ($isEmptyCheck)
                return (!empty($value));

            return true;
        }

        return false;
    }

    public static function RangeOf($value, $minRange=null, $maxRange=null) {
        if (!is_nan($minRange)) {
            if (!is_nan($maxRange))
                return ($value <= $maxRange && $value >= $minRange);
            else
                return ($value >= $minRange);
        } else if (!is_nan($maxRange)) {
            return ($value <= $maxRange);
        }

        return true;
    }

    public static function IsNumber($value, $minRange=null, $maxRange=null) {
        if (!empty($value) && (is_int($value) || is_float($value)))
            return self::RangeOf($value, $minRange, $maxRange);

        return false;
    }
    public static function IsInt($value, $minRange=null, $maxRange=null) {
        if (!empty($value) && is_int($value))
            return self::RangeOf($value, $minRange, $maxRange);

        return false;
    }
    public static function IsFloat($value, $minRange=null, $maxRange=null) {
        if (!empty($value) && is_float($value))
            return self::RangeOf($value, $minRange, $maxRange);

        return false;
    }

    public static function IsArray($value, $isEmptyCheck=true) {
        if (is_array($value)) {
            if ($isEmptyCheck)
                return (count($value) > 0);

            return true;
        }

        return false;
    }
}